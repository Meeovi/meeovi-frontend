import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_streamCreateManyInput } from "../../../inputs/Product_streamCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_streamArgs {
  @TypeGraphQL.Field(_type => [Product_streamCreateManyInput], {
    nullable: false
  })
  data!: Product_streamCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
