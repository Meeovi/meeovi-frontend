import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_translationUpdateInput } from "../../../inputs/Product_cross_selling_translationUpdateInput";
import { Product_cross_selling_translationWhereUniqueInput } from "../../../inputs/Product_cross_selling_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_cross_selling_translationArgs {
  @TypeGraphQL.Field(_type => Product_cross_selling_translationUpdateInput, {
    nullable: false
  })
  data!: Product_cross_selling_translationUpdateInput;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_selling_translationWhereUniqueInput;
}
