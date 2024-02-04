import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturerCreateManyInput } from "../../../inputs/Product_manufacturerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_manufacturerArgs {
  @TypeGraphQL.Field(_type => [Product_manufacturerCreateManyInput], {
    nullable: false
  })
  data!: Product_manufacturerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
