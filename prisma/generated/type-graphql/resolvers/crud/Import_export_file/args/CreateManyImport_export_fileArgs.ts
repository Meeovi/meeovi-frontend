import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_fileCreateManyInput } from "../../../inputs/Import_export_fileCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyImport_export_fileArgs {
  @TypeGraphQL.Field(_type => [Import_export_fileCreateManyInput], {
    nullable: false
  })
  data!: Import_export_fileCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
