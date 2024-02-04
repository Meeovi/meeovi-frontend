import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_setWhereInput } from "../../../inputs/Product_feature_setWhereInput";

@TypeGraphQL.ArgsType()
export class ProductProduct_feature_setArgs {
  @TypeGraphQL.Field(_type => Product_feature_setWhereInput, {
    nullable: true
  })
  where?: Product_feature_setWhereInput | undefined;
}
