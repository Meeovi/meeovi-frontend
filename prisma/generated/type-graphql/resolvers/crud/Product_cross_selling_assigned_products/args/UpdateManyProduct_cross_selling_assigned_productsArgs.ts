import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_assigned_productsUpdateManyMutationInput } from "../../../inputs/Product_cross_selling_assigned_productsUpdateManyMutationInput";
import { Product_cross_selling_assigned_productsWhereInput } from "../../../inputs/Product_cross_selling_assigned_productsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_cross_selling_assigned_productsArgs {
  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_cross_selling_assigned_productsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsWhereInput, {
    nullable: true
  })
  where?: Product_cross_selling_assigned_productsWhereInput | undefined;
}
