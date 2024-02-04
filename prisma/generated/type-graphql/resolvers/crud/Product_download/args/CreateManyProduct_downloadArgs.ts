import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_downloadCreateManyInput } from "../../../inputs/Product_downloadCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_downloadArgs {
  @TypeGraphQL.Field(_type => [Product_downloadCreateManyInput], {
    nullable: false
  })
  data!: Product_downloadCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
