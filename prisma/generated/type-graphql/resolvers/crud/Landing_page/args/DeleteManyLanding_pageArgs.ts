import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_pageWhereInput } from "../../../inputs/Landing_pageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLanding_pageArgs {
  @TypeGraphQL.Field(_type => Landing_pageWhereInput, {
    nullable: true
  })
  where?: Landing_pageWhereInput | undefined;
}
