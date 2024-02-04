import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_mappingCreateManyInput } from "../../../inputs/Product_stream_mappingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_stream_mappingArgs {
  @TypeGraphQL.Field(_type => [Product_stream_mappingCreateManyInput], {
    nullable: false
  })
  data!: Product_stream_mappingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
