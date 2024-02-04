import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_shipping_methodWhereInput } from "../../../inputs/App_shipping_methodWhereInput";

@TypeGraphQL.ArgsType()
export class Shipping_methodApp_shipping_methodArgs {
  @TypeGraphQL.Field(_type => App_shipping_methodWhereInput, {
    nullable: true
  })
  where?: App_shipping_methodWhereInput | undefined;
}
