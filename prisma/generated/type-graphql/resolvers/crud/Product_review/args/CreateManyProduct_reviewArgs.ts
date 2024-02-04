import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_reviewCreateManyInput } from "../../../inputs/Product_reviewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_reviewArgs {
  @TypeGraphQL.Field(_type => [Product_reviewCreateManyInput], {
    nullable: false
  })
  data!: Product_reviewCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
