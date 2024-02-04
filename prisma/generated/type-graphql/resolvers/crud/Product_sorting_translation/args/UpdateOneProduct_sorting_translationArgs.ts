import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sorting_translationUpdateInput } from "../../../inputs/Product_sorting_translationUpdateInput";
import { Product_sorting_translationWhereUniqueInput } from "../../../inputs/Product_sorting_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_sorting_translationArgs {
  @TypeGraphQL.Field(_type => Product_sorting_translationUpdateInput, {
    nullable: false
  })
  data!: Product_sorting_translationUpdateInput;

  @TypeGraphQL.Field(_type => Product_sorting_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_sorting_translationWhereUniqueInput;
}
