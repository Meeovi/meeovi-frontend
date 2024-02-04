import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sortingUpdateInput } from "../../../inputs/Product_sortingUpdateInput";
import { Product_sortingWhereUniqueInput } from "../../../inputs/Product_sortingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_sortingArgs {
  @TypeGraphQL.Field(_type => Product_sortingUpdateInput, {
    nullable: false
  })
  data!: Product_sortingUpdateInput;

  @TypeGraphQL.Field(_type => Product_sortingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_sortingWhereUniqueInput;
}
