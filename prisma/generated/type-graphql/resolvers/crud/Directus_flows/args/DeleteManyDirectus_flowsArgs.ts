import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_flowsWhereInput } from "../../../inputs/Directus_flowsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDirectus_flowsArgs {
  @TypeGraphQL.Field(_type => Directus_flowsWhereInput, {
    nullable: true
  })
  where?: Directus_flowsWhereInput | undefined;
}
