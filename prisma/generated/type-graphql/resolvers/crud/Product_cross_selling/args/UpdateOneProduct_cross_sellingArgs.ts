import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_sellingUpdateInput } from "../../../inputs/Product_cross_sellingUpdateInput";
import { Product_cross_sellingWhereUniqueInput } from "../../../inputs/Product_cross_sellingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_cross_sellingArgs {
  @TypeGraphQL.Field(_type => Product_cross_sellingUpdateInput, {
    nullable: false
  })
  data!: Product_cross_sellingUpdateInput;

  @TypeGraphQL.Field(_type => Product_cross_sellingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_sellingWhereUniqueInput;
}
