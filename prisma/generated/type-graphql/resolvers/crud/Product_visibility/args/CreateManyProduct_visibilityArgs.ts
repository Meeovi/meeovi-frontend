import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_visibilityCreateManyInput } from "../../../inputs/Product_visibilityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_visibilityArgs {
  @TypeGraphQL.Field(_type => [Product_visibilityCreateManyInput], {
    nullable: false
  })
  data!: Product_visibilityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
