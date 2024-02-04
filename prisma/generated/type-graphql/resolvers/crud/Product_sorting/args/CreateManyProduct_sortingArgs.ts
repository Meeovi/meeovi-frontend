import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sortingCreateManyInput } from "../../../inputs/Product_sortingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_sortingArgs {
  @TypeGraphQL.Field(_type => [Product_sortingCreateManyInput], {
    nullable: false
  })
  data!: Product_sortingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
