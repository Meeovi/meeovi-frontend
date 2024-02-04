import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sortingCreateInput } from "../../../inputs/Product_sortingCreateInput";
import { Product_sortingUpdateInput } from "../../../inputs/Product_sortingUpdateInput";
import { Product_sortingWhereUniqueInput } from "../../../inputs/Product_sortingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_sortingArgs {
  @TypeGraphQL.Field(_type => Product_sortingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_sortingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_sortingCreateInput, {
    nullable: false
  })
  create!: Product_sortingCreateInput;

  @TypeGraphQL.Field(_type => Product_sortingUpdateInput, {
    nullable: false
  })
  update!: Product_sortingUpdateInput;
}
