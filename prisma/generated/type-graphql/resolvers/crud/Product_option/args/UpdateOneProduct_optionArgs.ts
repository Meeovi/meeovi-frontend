import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_optionUpdateInput } from "../../../inputs/Product_optionUpdateInput";
import { Product_optionWhereUniqueInput } from "../../../inputs/Product_optionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_optionArgs {
  @TypeGraphQL.Field(_type => Product_optionUpdateInput, {
    nullable: false
  })
  data!: Product_optionUpdateInput;

  @TypeGraphQL.Field(_type => Product_optionWhereUniqueInput, {
    nullable: false
  })
  where!: Product_optionWhereUniqueInput;
}
