import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_tagUpdateInput } from "../../../inputs/Product_tagUpdateInput";
import { Product_tagWhereUniqueInput } from "../../../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_tagArgs {
  @TypeGraphQL.Field(_type => Product_tagUpdateInput, {
    nullable: false
  })
  data!: Product_tagUpdateInput;

  @TypeGraphQL.Field(_type => Product_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Product_tagWhereUniqueInput;
}
