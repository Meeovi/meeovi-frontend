import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_payment_methodCreateInput } from "../../../inputs/App_payment_methodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_payment_methodArgs {
  @TypeGraphQL.Field(_type => App_payment_methodCreateInput, {
    nullable: false
  })
  data!: App_payment_methodCreateInput;
}
