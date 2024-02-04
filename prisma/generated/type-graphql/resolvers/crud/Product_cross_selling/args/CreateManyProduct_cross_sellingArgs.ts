import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_sellingCreateManyInput } from "../../../inputs/Product_cross_sellingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_cross_sellingArgs {
  @TypeGraphQL.Field(_type => [Product_cross_sellingCreateManyInput], {
    nullable: false
  })
  data!: Product_cross_sellingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
