import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_eventWhereInput } from "../inputs/Klaviyo_job_eventWhereInput";

@TypeGraphQL.InputType("Klaviyo_job_eventListRelationFilter", {})
export class Klaviyo_job_eventListRelationFilter {
  @TypeGraphQL.Field(_type => Klaviyo_job_eventWhereInput, {
    nullable: true
  })
  every?: Klaviyo_job_eventWhereInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventWhereInput, {
    nullable: true
  })
  some?: Klaviyo_job_eventWhereInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventWhereInput, {
    nullable: true
  })
  none?: Klaviyo_job_eventWhereInput | undefined;
}
