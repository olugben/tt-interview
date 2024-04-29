import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "@app/common";
@Schema({versionKey:false})
export class Auth extends AbstractDocument{
    @Prop()
    id:number;
    @Prop()
    email: string;
    @Prop()
    displayName: string;


}

export const AuthSchema =SchemaFactory.createForClass(Auth)