import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_sellingUpdateManyMutationInput } from "../../../inputs/Product_cross_sellingUpdateManyMutationInput";
import { Product_cross_sellingWhereInput } from "../../../inputs/Product_cross_sellingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_cross_sellingArgs {
  @TypeGraphQL.Field(_type => Product_cross_sellingUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_cross_sellingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_cross_sellingWhereInput, {
    nullable: true
  })
  where?: Product_cross_sellingWhereInput | undefined;
}
