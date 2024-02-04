import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_methodWhereInput } from "../../../inputs/Shipping_methodWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShipping_methodArgs {
  @TypeGraphQL.Field(_type => Shipping_methodWhereInput, {
    nullable: true
  })
  where?: Shipping_methodWhereInput | undefined;
}
