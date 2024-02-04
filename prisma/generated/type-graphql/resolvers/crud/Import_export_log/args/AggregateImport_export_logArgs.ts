import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_logOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Import_export_logOrderByWithRelationAndSearchRelevanceInput";
import { Import_export_logWhereInput } from "../../../inputs/Import_export_logWhereInput";
import { Import_export_logWhereUniqueInput } from "../../../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateImport_export_logArgs {
  @TypeGraphQL.Field(_type => Import_export_logWhereInput, {
    nullable: true
  })
  where?: Import_export_logWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Import_export_logOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_logWhereUniqueInput, {
    nullable: true
  })
  cursor?: Import_export_logWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
