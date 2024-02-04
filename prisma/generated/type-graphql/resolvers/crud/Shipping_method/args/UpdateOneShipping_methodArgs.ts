import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_methodUpdateInput } from "../../../inputs/Shipping_methodUpdateInput";
import { Shipping_methodWhereUniqueInput } from "../../../inputs/Shipping_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneShipping_methodArgs {
  @TypeGraphQL.Field(_type => Shipping_methodUpdateInput, {
    nullable: false
  })
  data!: Shipping_methodUpdateInput;

  @TypeGraphQL.Field(_type => Shipping_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Shipping_methodWhereUniqueInput;
}
