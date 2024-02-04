import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_tagCreateManyInput } from "../../../inputs/Category_tagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCategory_tagArgs {
  @TypeGraphQL.Field(_type => [Category_tagCreateManyInput], {
    nullable: false
  })
  data!: Category_tagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
