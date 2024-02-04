import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profileCreateManyInput } from "../../../inputs/Import_export_profileCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyImport_export_profileArgs {
  @TypeGraphQL.Field(_type => [Import_export_profileCreateManyInput], {
    nullable: false
  })
  data!: Import_export_profileCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
