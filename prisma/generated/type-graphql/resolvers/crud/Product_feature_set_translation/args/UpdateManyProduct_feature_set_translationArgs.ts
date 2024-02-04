import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_set_translationUpdateManyMutationInput } from "../../../inputs/Product_feature_set_translationUpdateManyMutationInput";
import { Product_feature_set_translationWhereInput } from "../../../inputs/Product_feature_set_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_feature_set_translationArgs {
  @TypeGraphQL.Field(_type => Product_feature_set_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_feature_set_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereInput, {
    nullable: true
  })
  where?: Product_feature_set_translationWhereInput | undefined;
}
