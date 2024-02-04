import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_activityCreateManyInput } from "../../../inputs/Directus_activityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDirectus_activityArgs {
  @TypeGraphQL.Field(_type => [Directus_activityCreateManyInput], {
    nullable: false
  })
  data!: Directus_activityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
