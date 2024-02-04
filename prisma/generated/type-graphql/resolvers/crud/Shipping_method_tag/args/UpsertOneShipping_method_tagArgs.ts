import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_tagCreateInput } from "../../../inputs/Shipping_method_tagCreateInput";
import { Shipping_method_tagUpdateInput } from "../../../inputs/Shipping_method_tagUpdateInput";
import { Shipping_method_tagWhereUniqueInput } from "../../../inputs/Shipping_method_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneShipping_method_tagArgs {
  @TypeGraphQL.Field(_type => Shipping_method_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Shipping_method_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Shipping_method_tagCreateInput, {
    nullable: false
  })
  create!: Shipping_method_tagCreateInput;

  @TypeGraphQL.Field(_type => Shipping_method_tagUpdateInput, {
    nullable: false
  })
  update!: Shipping_method_tagUpdateInput;
}
