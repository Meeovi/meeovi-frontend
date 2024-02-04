import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Usage_data_entity_deletionCreateManyInput } from "../../../inputs/Usage_data_entity_deletionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUsage_data_entity_deletionArgs {
  @TypeGraphQL.Field(_type => [Usage_data_entity_deletionCreateManyInput], {
    nullable: false
  })
  data!: Usage_data_entity_deletionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
