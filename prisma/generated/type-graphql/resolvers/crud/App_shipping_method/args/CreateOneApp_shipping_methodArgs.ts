import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_shipping_methodCreateInput } from "../../../inputs/App_shipping_methodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_shipping_methodArgs {
  @TypeGraphQL.Field(_type => App_shipping_methodCreateInput, {
    nullable: false
  })
  data!: App_shipping_methodCreateInput;
}
