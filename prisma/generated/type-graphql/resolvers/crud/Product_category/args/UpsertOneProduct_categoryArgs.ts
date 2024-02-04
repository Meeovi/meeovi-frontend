import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_categoryCreateInput } from "../../../inputs/Product_categoryCreateInput";
import { Product_categoryUpdateInput } from "../../../inputs/Product_categoryUpdateInput";
import { Product_categoryWhereUniqueInput } from "../../../inputs/Product_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_categoryArgs {
  @TypeGraphQL.Field(_type => Product_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Product_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_categoryCreateInput, {
    nullable: false
  })
  create!: Product_categoryCreateInput;

  @TypeGraphQL.Field(_type => Product_categoryUpdateInput, {
    nullable: false
  })
  update!: Product_categoryUpdateInput;
}
