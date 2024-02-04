import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_optionWhereInput } from "../../../inputs/Product_optionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_optionArgs {
  @TypeGraphQL.Field(_type => Product_optionWhereInput, {
    nullable: true
  })
  where?: Product_optionWhereInput | undefined;
}
