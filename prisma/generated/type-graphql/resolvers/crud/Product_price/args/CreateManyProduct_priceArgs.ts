import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_priceCreateManyInput } from "../../../inputs/Product_priceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_priceArgs {
  @TypeGraphQL.Field(_type => [Product_priceCreateManyInput], {
    nullable: false
  })
  data!: Product_priceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
