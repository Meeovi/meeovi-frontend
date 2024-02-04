import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutProduct_manufacturerInput } from "../inputs/MediaCreateWithoutProduct_manufacturerInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutProduct_manufacturerInput", {})
export class MediaCreateOrConnectWithoutProduct_manufacturerInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_manufacturerInput, {
    nullable: false
  })
  create!: MediaCreateWithoutProduct_manufacturerInput;
}
