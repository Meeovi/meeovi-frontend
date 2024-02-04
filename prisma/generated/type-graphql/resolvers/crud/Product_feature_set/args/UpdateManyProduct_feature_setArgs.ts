import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_setUpdateManyMutationInput } from "../../../inputs/Product_feature_setUpdateManyMutationInput";
import { Product_feature_setWhereInput } from "../../../inputs/Product_feature_setWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_feature_setArgs {
  @TypeGraphQL.Field(_type => Product_feature_setUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_feature_setUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_feature_setWhereInput, {
    nullable: true
  })
  where?: Product_feature_setWhereInput | undefined;
}
