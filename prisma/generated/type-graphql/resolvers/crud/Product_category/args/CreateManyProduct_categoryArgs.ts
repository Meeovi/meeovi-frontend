import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_categoryCreateManyInput } from "../../../inputs/Product_categoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_categoryArgs {
  @TypeGraphQL.Field(_type => [Product_categoryCreateManyInput], {
    nullable: false
  })
  data!: Product_categoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
