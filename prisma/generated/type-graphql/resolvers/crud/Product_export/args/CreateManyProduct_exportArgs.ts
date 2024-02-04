import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_exportCreateManyInput } from "../../../inputs/Product_exportCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_exportArgs {
  @TypeGraphQL.Field(_type => [Product_exportCreateManyInput], {
    nullable: false
  })
  data!: Product_exportCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
