import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_optionCreateInput } from "../../../inputs/Product_optionCreateInput";
import { Product_optionUpdateInput } from "../../../inputs/Product_optionUpdateInput";
import { Product_optionWhereUniqueInput } from "../../../inputs/Product_optionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_optionArgs {
  @TypeGraphQL.Field(_type => Product_optionWhereUniqueInput, {
    nullable: false
  })
  where!: Product_optionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_optionCreateInput, {
    nullable: false
  })
  create!: Product_optionCreateInput;

  @TypeGraphQL.Field(_type => Product_optionUpdateInput, {
    nullable: false
  })
  update!: Product_optionUpdateInput;
}
