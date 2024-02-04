import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_priceUpdateManyMutationInput } from "../../../inputs/Product_priceUpdateManyMutationInput";
import { Product_priceWhereInput } from "../../../inputs/Product_priceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_priceArgs {
  @TypeGraphQL.Field(_type => Product_priceUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_priceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_priceWhereInput, {
    nullable: true
  })
  where?: Product_priceWhereInput | undefined;
}
