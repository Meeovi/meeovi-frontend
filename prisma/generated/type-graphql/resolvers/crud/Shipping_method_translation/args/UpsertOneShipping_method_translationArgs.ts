import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_translationCreateInput } from "../../../inputs/Shipping_method_translationCreateInput";
import { Shipping_method_translationUpdateInput } from "../../../inputs/Shipping_method_translationUpdateInput";
import { Shipping_method_translationWhereUniqueInput } from "../../../inputs/Shipping_method_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneShipping_method_translationArgs {
  @TypeGraphQL.Field(_type => Shipping_method_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Shipping_method_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Shipping_method_translationCreateInput, {
    nullable: false
  })
  create!: Shipping_method_translationCreateInput;

  @TypeGraphQL.Field(_type => Shipping_method_translationUpdateInput, {
    nullable: false
  })
  update!: Shipping_method_translationUpdateInput;
}
