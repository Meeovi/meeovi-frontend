import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_tagCreateManyInput } from "../../../inputs/Product_tagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_tagArgs {
  @TypeGraphQL.Field(_type => [Product_tagCreateManyInput], {
    nullable: false
  })
  data!: Product_tagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
