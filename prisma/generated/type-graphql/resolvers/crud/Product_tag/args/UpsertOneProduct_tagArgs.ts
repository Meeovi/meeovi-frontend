import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_tagCreateInput } from "../../../inputs/Product_tagCreateInput";
import { Product_tagUpdateInput } from "../../../inputs/Product_tagUpdateInput";
import { Product_tagWhereUniqueInput } from "../../../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_tagArgs {
  @TypeGraphQL.Field(_type => Product_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Product_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_tagCreateInput, {
    nullable: false
  })
  create!: Product_tagCreateInput;

  @TypeGraphQL.Field(_type => Product_tagUpdateInput, {
    nullable: false
  })
  update!: Product_tagUpdateInput;
}
