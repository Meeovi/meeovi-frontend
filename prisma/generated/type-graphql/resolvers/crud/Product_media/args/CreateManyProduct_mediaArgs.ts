import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_mediaCreateManyInput } from "../../../inputs/Product_mediaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_mediaArgs {
  @TypeGraphQL.Field(_type => [Product_mediaCreateManyInput], {
    nullable: false
  })
  data!: Product_mediaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
