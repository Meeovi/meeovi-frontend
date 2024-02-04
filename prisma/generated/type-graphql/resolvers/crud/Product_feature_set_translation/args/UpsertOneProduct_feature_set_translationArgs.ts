import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_set_translationCreateInput } from "../../../inputs/Product_feature_set_translationCreateInput";
import { Product_feature_set_translationUpdateInput } from "../../../inputs/Product_feature_set_translationUpdateInput";
import { Product_feature_set_translationWhereUniqueInput } from "../../../inputs/Product_feature_set_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_feature_set_translationArgs {
  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_feature_set_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_feature_set_translationCreateInput, {
    nullable: false
  })
  create!: Product_feature_set_translationCreateInput;

  @TypeGraphQL.Field(_type => Product_feature_set_translationUpdateInput, {
    nullable: false
  })
  update!: Product_feature_set_translationUpdateInput;
}
