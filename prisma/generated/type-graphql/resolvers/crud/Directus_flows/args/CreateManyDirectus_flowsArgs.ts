import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_flowsCreateManyInput } from "../../../inputs/Directus_flowsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDirectus_flowsArgs {
  @TypeGraphQL.Field(_type => [Directus_flowsCreateManyInput], {
    nullable: false
  })
  data!: Directus_flowsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
