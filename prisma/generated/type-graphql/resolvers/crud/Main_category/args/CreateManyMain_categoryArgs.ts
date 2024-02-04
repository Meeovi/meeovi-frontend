import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Main_categoryCreateManyInput } from "../../../inputs/Main_categoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMain_categoryArgs {
  @TypeGraphQL.Field(_type => [Main_categoryCreateManyInput], {
    nullable: false
  })
  data!: Main_categoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
