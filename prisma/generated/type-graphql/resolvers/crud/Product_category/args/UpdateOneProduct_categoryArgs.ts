import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_categoryUpdateInput } from "../../../inputs/Product_categoryUpdateInput";
import { Product_categoryWhereUniqueInput } from "../../../inputs/Product_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_categoryArgs {
  @TypeGraphQL.Field(_type => Product_categoryUpdateInput, {
    nullable: false
  })
  data!: Product_categoryUpdateInput;

  @TypeGraphQL.Field(_type => Product_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Product_categoryWhereUniqueInput;
}
